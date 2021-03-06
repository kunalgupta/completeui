var temp_ntb_rowXslProc='<?xml version="1.0" encoding="utf-8"?><xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:ntb="http://www.nitobi.com" xmlns:d="http://exslt.org/dates-and-times" xmlns:n="http://www.nitobi.com/exslt/numbers" extension-element-prefixes="d n"><xsl:output method="xml" omit-xml-declaration="yes"/> <x:p-x:n-showHeaders"x:s-\'0\'" /><x:p-x:n-firstColumn"x:s-\'0\'" /><x:p-x:n-lastColumn"x:s-\'0\'" /><x:p-x:n-uniqueId"x:s-\'0\'" /><x:p-x:n-rowHover"x:s-\'0\'" /><x:p-x:n-frozenColumnId"x:s-\'\'" /><x:p-x:n-start" /><x:p-x:n-end" /><x:p-x:n-activeColumn"x:s-\'0\'" /><x:p-x:n-activeRow"x:s-\'0\'" /><x:p-x:n-sortColumn"x:s-\'0\'" /><x:p-x:n-toolTipsEnabled"x:s-\'0\'" /><x:p-x:n-sortDirection"x:s-\'Asc\'" /><x:p-x:n-dataTableId"x:s-\'_default\'" /><x:p-x:n-columns"x:s-/ntb:root/ntb:columns/*/*" /><xsl:keyx:n-data-source" match="//ntb:datasources/ntb:datasource" use="@id" /><xsl:keyx:n-group" match="ntb:e" use="@a" /><!-- <xsl:for-eachx:s-ntb:e[count(. | key(\'group\', @a)[1]) = 1]"> <xsl:sortx:s-@a" /> <x:v-x:s-@a" />,<br /> <xsl:for-eachx:s-key(\'group\', @a)"> <xsl:sortx:s-@b" /> <x:v-x:s-@b" /> (<x:v-x:s-@c" />)<br /> </xsl:for-each> </xsl:for-each>--><!--This is an incude for the date fromatting XSLT that gets replaced at compile time--> <!-- http://java.sun.com/j2se/1.3/docs/api/java/text/SimpleDateFormat.html --><d:ms> <d:m i="1" l="31" a="Jan">January</d:m> <d:m i="2" l="28" a="Feb">February</d:m> <d:m i="3" l="31" a="Mar">March</d:m> <d:m i="4" l="30" a="Apr">April</d:m> <d:m i="5" l="31" a="May">May</d:m> <d:m i="6" l="30" a="Jun">June</d:m> <d:m i="7" l="31" a="Jul">July</d:m> <d:m i="8" l="31" a="Aug">August</d:m> <d:m i="9" l="30" a="Sep">September</d:m> <d:m i="10" l="31" a="Oct">October</d:m> <d:m i="11" l="30" a="Nov">November</d:m> <d:m i="12" l="31" a="Dec">December</d:m></d:ms><d:ds> <d:d a="Sun">Sunday</d:d> <d:d a="Mon">Monday</d:d> <d:d a="Tue">Tuesday</d:d> <d:d a="Wed">Wednesday</d:d> <d:d a="Thu">Thursday</d:d> <d:d a="Fri">Friday</d:d> <d:d a="Sat">Saturday</d:d></d:ds><x:t-x:n-d:format-date"> <x:p-x:n-date-time" /> <x:p-x:n-mask"x:s-\'MMM d, yy\'"/> <x:p-x:n-date-year" /> <x:va-x:n-formatted"> <x:va-x:n-date-time-length"x:s-string-length($date-time)" /> <x:va-x:n-timezone"x:s-\'\'" /> <x:va-x:n-dt"x:s-substring($date-time, 1, $date-time-length - string-length($timezone))" /> <x:va-x:n-dt-length"x:s-string-length($dt)" /> <x:c-> <x:wh- test="substring($dt, 3, 1) = \':\' and substring($dt, 6, 1) = \':\'"> <!--that means we just have a time--> <x:va-x:n-hour"x:s-substring($dt, 1, 2)" /> <x:va-x:n-min"x:s-substring($dt, 4, 2)" /> <x:va-x:n-sec"x:s-substring($dt, 7)" /> <xsl:if test="$hour &lt;= 23 and $min &lt;= 59 and $sec &lt;= 60"> <x:ct-x:n-d:_format-date"> <x:w-x:n-year"x:s-\'NaN\'" /> <x:w-x:n-month"x:s-\'NaN\'" /> <x:w-x:n-day"x:s-\'NaN\'" /> <x:w-x:n-hour"x:s-$hour" /> <x:w-x:n-minute"x:s-$min" /> <x:w-x:n-second"x:s-$sec" /> <x:w-x:n-timezone"x:s-$timezone" /> <x:w-x:n-mask"x:s-$mask" /> </x:ct-> </xsl:if> </x:wh-> <x:wh- test="substring($dt, 2, 1) = \'-\' or substring($dt, 3, 1) = \'-\'"> <x:c-> <x:wh- test="$dt-length = 5 or $dt-length = 6"> <!--D-MMM,DD-MMM--> <x:va-x:n-year"x:s-$date-year" /> <x:va-x:n-month"x:s-document(\'\')/*/d:ms/d:m[@a = substring-after($dt,\'-\')]/@i" /> <x:va-x:n-day"x:s-substring-before($dt,\'-\')" /> <x:ct-x:n-d:_format-date"> <x:w-x:n-year"x:s-$year" /> <x:w-x:n-month"x:s-$month" /> <x:w-x:n-day"x:s-$day" /> <x:w-x:n-timezone"x:s-$timezone" /> <x:w-x:n-mask"x:s-$mask" /> </x:ct-> </x:wh-> <x:wh- test="$dt-length = 8 or $dt-length = 9"> <!--D-MMM-YY,DD-MMM-YY--> <x:va-x:n-year"x:s-concat(\'20\',substring-after(substring-after($dt,\'-\'),\'-\'))" /> <x:va-x:n-month"x:s-document(\'\')/*/d:ms/d:m[@a = substring-before(substring-after($dt,\'-\'),\'-\')]/@i" /> <x:va-x:n-day"x:s-substring-before($dt,\'-\')" /> <x:ct-x:n-d:_format-date"> <x:w-x:n-year"x:s-$year" /> <x:w-x:n-month"x:s-$month" /> <x:w-x:n-day"x:s-$day" /> <x:w-x:n-timezone"x:s-$timezone" /> <x:w-x:n-mask"x:s-$mask" /> </x:ct-> </x:wh-> <x:o-> <!--D-MMM-YYYY,DD-MMM-YYYY--> <x:va-x:n-year"x:s-substring-after(substring-after($dt,\'-\'),\'-\')" /> <x:va-x:n-month"x:s-document(\'\')/*/d:ms/d:m[@a = substring-before(substring-after($dt,\'-\'),\'-\')]/@i" /> <x:va-x:n-day"x:s-substring-before($dt,\'-\')" /> <x:ct-x:n-d:_format-date"> <x:w-x:n-year"x:s-$year" /> <x:w-x:n-month"x:s-$month" /> <x:w-x:n-day"x:s-$day" /> <x:w-x:n-timezone"x:s-$timezone" /> <x:w-x:n-mask"x:s-$mask" /> </x:ct-> </x:o-> </x:c-> </x:wh-> <x:o-> <!--($neg * -2)--> <x:va-x:n-year"x:s-substring($dt, 1, 4) * (0 + 1)" /> <x:va-x:n-month"x:s-substring($dt, 6, 2)" /> <x:va-x:n-day"x:s-substring($dt, 9, 2)" /> <x:c-> <x:wh- test="$dt-length = 10"> <!--that means we just have a date--> <x:ct-x:n-d:_format-date"> <x:w-x:n-year"x:s-$year" /> <x:w-x:n-month"x:s-$month" /> <x:w-x:n-day"x:s-$day" /> <x:w-x:n-timezone"x:s-$timezone" /> <x:w-x:n-mask"x:s-$mask" /> </x:ct-> </x:wh-> <x:wh- test="substring($dt, 14, 1) = \':\' and substring($dt, 17, 1) = \':\'"> <!--that means we have a date + time--> <x:va-x:n-hour"x:s-substring($dt, 12, 2)" /> <x:va-x:n-min"x:s-substring($dt, 15, 2)" /> <x:va-x:n-sec"x:s-substring($dt, 18)" /> <x:ct-x:n-d:_format-date"> <x:w-x:n-year"x:s-$year" /> <x:w-x:n-month"x:s-$month" /> <x:w-x:n-day"x:s-$day" /> <x:w-x:n-hour"x:s-$hour" /> <x:w-x:n-minute"x:s-$min" /> <x:w-x:n-second"x:s-$sec" /> <x:w-x:n-timezone"x:s-$timezone" /> <x:w-x:n-mask"x:s-$mask" /> </x:ct-> </x:wh-> </x:c-> </x:o-> </x:c-> </x:va-> <x:v-x:s-$formatted" /> </x:t-><x:t-x:n-d:_format-date"> <x:p-x:n-year" /> <x:p-x:n-month"x:s-1" /> <x:p-x:n-day"x:s-1" /> <x:p-x:n-hour"x:s-0" /> <x:p-x:n-minute"x:s-0" /> <x:p-x:n-second"x:s-0" /> <x:p-x:n-timezone"x:s-\'Z\'" /> <x:p-x:n-mask"x:s-\'\'" /> <x:va-x:n-char"x:s-substring($mask, 1, 1)" /> <x:c-> <x:wh- test="not($mask)" /> <!--replaced escaping with \' here/--> <x:wh- test="not(contains(\'GyMdhHmsSEDFwWakKz\', $char))"> <x:v-x:s-$char" /> <x:ct-x:n-d:_format-date"> <x:w-x:n-year"x:s-$year" /> <x:w-x:n-month"x:s-$month" /> <x:w-x:n-day"x:s-$day" /> <x:w-x:n-hour"x:s-$hour" /> <x:w-x:n-minute"x:s-$minute" /> <x:w-x:n-second"x:s-$second" /> <x:w-x:n-timezone"x:s-$timezone" /> <x:w-x:n-mask"x:s-substring($mask, 2)" /> </x:ct-> </x:wh-> <x:o-> <x:va-x:n-next-different-char"x:s-substring(translate($mask, $char, \'\'), 1, 1)" /> <x:va-x:n-mask-length"> <x:c-> <x:wh- test="$next-different-char"> <x:v-x:s-string-length(substring-before($mask, $next-different-char))" /> </x:wh-> <x:o-> <x:v-x:s-string-length($mask)" /> </x:o-> </x:c-> </x:va-> <x:c-> <!--took our the era designator--> <x:wh- test="$char = \'M\'"> <x:c-> <x:wh- test="$mask-length >= 3"> <x:va-x:n-month-node"x:s-document(\'\')/*/d:ms/d:m[number($month)]" /> <x:c-> <x:wh- test="$mask-length >= 4"> <x:v-x:s-$month-node" /> </x:wh-> <x:o-> <x:v-x:s-$month-node/@a" /> </x:o-> </x:c-> </x:wh-> <x:wh- test="$mask-length = 2"> <x:v-x:s-format-number($month, \'00\')" /> </x:wh-> <x:o-> <x:v-x:s-$month" /> </x:o-> </x:c-> </x:wh-> <x:wh- test="$char = \'E\'"> <x:va-x:n-month-days"x:s-sum(document(\'\')/*/d:ms/d:m[position() &lt; $month]/@l)" /> <x:va-x:n-days"x:s-$month-days + $day + boolean(((not($year mod 4) and $year mod 100) or not($year mod 400)) and $month &gt; 2)" /> <x:va-x:n-y-1"x:s-$year - 1" /> <x:va-x:n-dow"x:s-(($y-1 + floor($y-1 div 4) - floor($y-1 div 100) + floor($y-1 div 400) + $days) mod 7) + 1" /> <x:va-x:n-day-node"x:s-document(\'\')/*/d:ds/d:d[number($dow)]" /> <x:c-> <x:wh- test="$mask-length >= 4"> <x:v-x:s-$day-node" /> </x:wh-> <x:o-> <x:v-x:s-$day-node/@a" /> </x:o-> </x:c-> </x:wh-> <x:wh- test="$char = \'a\'"> <x:c-> <x:wh- test="$hour >= 12">PM</x:wh-> <x:o->AM</x:o-> </x:c-> </x:wh-> <x:wh- test="$char = \'z\'"> <x:c-> <x:wh- test="$timezone = \'Z\'">UTC</x:wh-> <x:o->UTC<x:v-x:s-$timezone" /></x:o-> </x:c-> </x:wh-> <x:o-> <x:va-x:n-padding"x:s-\'00\'" /> <!--removed padding--> <x:c-> <x:wh- test="$char = \'y\'"> <x:c-> <x:wh- test="$mask-length &gt; 2"><x:v-x:s-format-number($year, $padding)" /></x:wh-> <x:o-><x:v-x:s-format-number(substring($year, string-length($year) - 1), $padding)" /></x:o-> </x:c-> </x:wh-> <x:wh- test="$char = \'d\'"> <x:v-x:s-format-number($day, $padding)" /> </x:wh-> <x:wh- test="$char = \'h\'"> <x:va-x:n-h"x:s-$hour mod 12" /> <x:c-> <x:wh- test="$h"><x:v-x:s-format-number($h, $padding)" /></x:wh-> <x:o-><x:v-x:s-format-number(12, $padding)" /></x:o-> </x:c-> </x:wh-> <x:wh- test="$char = \'H\'"> <x:v-x:s-format-number($hour, $padding)" /> </x:wh-> <x:wh- test="$char = \'k\'"> <x:c-> <x:wh- test="$hour"><x:v-x:s-format-number($hour, $padding)" /></x:wh-> <x:o-><x:v-x:s-format-number(24, $padding)" /></x:o-> </x:c-> </x:wh-> <x:wh- test="$char = \'K\'"> <x:v-x:s-format-number($hour mod 12, $padding)" /> </x:wh-> <x:wh- test="$char = \'m\'"> <x:v-x:s-format-number($minute, $padding)" /> </x:wh-> <x:wh- test="$char = \'s\'"> <x:v-x:s-format-number($second, $padding)" /> </x:wh-> <x:wh- test="$char = \'S\'"> <x:v-x:s-format-number(substring-after($second, \'.\'), $padding)" /> </x:wh-> <x:wh- test="$char = \'F\'"> <x:v-x:s-floor($day div 7) + 1" /> </x:wh-> <x:o-> <x:va-x:n-month-days"x:s-sum(document(\'\')/*/d:ms/d:m[position() &lt; $month]/@l)" /> <x:va-x:n-days"x:s-$month-days + $day + boolean(((not($year mod 4) and $year mod 100) or not($year mod 400)) and $month &gt; 2)" /> <x:v-x:s-format-number($days, $padding)" /> <!--removed week in year--> <!--removed week in month--> </x:o-> </x:c-> </x:o-> </x:c-> <x:ct-x:n-d:_format-date"> <x:w-x:n-year"x:s-$year" /> <x:w-x:n-month"x:s-$month" /> <x:w-x:n-day"x:s-$day" /> <x:w-x:n-hour"x:s-$hour" /> <x:w-x:n-minute"x:s-$minute" /> <x:w-x:n-second"x:s-$second" /> <x:w-x:n-timezone"x:s-$timezone" /> <x:w-x:n-mask"x:s-substring($mask, $mask-length + 1)" /> </x:ct-> </x:o-> </x:c-></x:t-><!--This is an incude for the number fromatting XSLT that gets replaced at compile time--> <!--http://www.w3schools.com/xsl/func_formatnumber.asp--><!-- <xsl:decimal-formatx:n-name" decimal-separator="char" grouping-separator="char" infinity="string" minus-sign="char" NaN="string" percent="char" per-mille="char" zero-digit="char" digit="char" pattern-separator="char"/> --><xsl:decimal-formatx:n-NA" decimal-separator="." grouping-separator="," /><xsl:decimal-formatx:n-EU" decimal-separator="," grouping-separator="." /><x:t-x:n-n:format"> <x:p-x:n-number"x:s-0" /> <x:p-x:n-mask"x:s-\'#.00\'" /> <x:p-x:n-group"x:s-\',\'" /> <x:p-x:n-decimal"x:s-\'.\'" /> <x:va-x:n-formattedNumber"> <x:c-> <x:wh- test="$group=\'.\' and $decimal=\',\'"> <x:v-x:s-format-number($number, $mask, \'EU\')" /> </x:wh-> <x:o-> <x:v-x:s-format-number($number, $mask, \'NA\')" /> </x:o-> </x:c-> </x:va-> <xsl:if test="not(string($formattedNumber) = \'NaN\')"> <x:v-x:s-$formattedNumber" /> </xsl:if></x:t-><x:t- match = "/"> <div> <xsl:if test="$showHeaders = 1"> <table cellpadding="0" cellspacing="0" border="0" class="ntb-grid-headerblock"> <tr> <x:a-x:n-class">ntb-header-row<x:v-x:s-$uniqueId" /></x:a-> <xsl:for-eachx:s-$columns"> <xsl:if test="@Visible = \'1\' and (position() &gt; $firstColumn and position() &lt;= $lastColumn)"> <td ebatype="columnheader" xi="{position()-1}" col="{position()-1}"> <x:a-x:n-id">columnheader_<x:v-x:s-position()-1"/>_<x:v-x:s-$uniqueId" /></x:a-> <x:a-x:n-onmouseover">$ntb(\'grid<x:v-x:s-$uniqueId" />\').jsObject.handleHeaderMouseOver(this);</x:a-> <x:a-x:n-onmouseout">$ntb(\'grid<x:v-x:s-$uniqueId" />\').jsObject.handleHeaderMouseOut(this);</x:a-> <!-- note that the ntb-columnUID_POSITION class is for a safari bug --> <x:a-x:n-class">ntb-column-indicator-border<x:c-><x:wh- test="$sortColumn=position()-1 and $sortDirection=\'Asc\'">ascending</x:wh-><x:wh- test="$sortColumn=position()-1 and $sortDirection=\'Desc\'">descending</x:wh-><x:o-></x:o-></x:c-><xsl:text> </xsl:text>ntb-column<x:v-x:s-$uniqueId"/>_<x:v-x:s-position()" /></x:a-> <div> <x:a-x:n-class">ntb-column-indicator ntb-column-indicator<x:v-x:s-$uniqueId" /></x:a-> <x:c-> <x:wh- test="@Label and not(@Label = \'\') and not(@Label = \' \')"><x:v-x:s-@Label" /></x:wh-> <x:wh- test="ntb:label and not(ntb:label = \'\') and not(ntb:label = \' \')"><x:v-x:s-ntb:label" /></x:wh-> <x:o->ATOKENTOREPLACE</x:o-> </x:c-> </div> </td> </xsl:if> </xsl:for-each> </tr> <x:ct-x:n-colgroup" /> </table> </xsl:if> <table cellpadding="0" cellspacing="0" border="0" class="ntb-grid-datablock"> <x:at-x:s-key(\'data-source\', $dataTableId)/ntb:data/ntb:e[@xi &gt;= $start and @xi &lt; $end]" > <xsl:sortx:s-@xi" data-type="number" /> </x:at-> <x:ct-x:n-colgroup" /> </table> </div></x:t-><x:t-x:n-colgroup"> <colgroup> <xsl:for-eachx:s-$columns"> <xsl:if test="@Visible = \'1\' and (position() &gt; $firstColumn and position() &lt;= $lastColumn)"> <col> <x:a-x:n-class">ntb-column<x:v-x:s-$uniqueId"/>_<x:v-x:s-position()" /><xsl:text> </xsl:text><xsl:if test="not(@Editable=\'1\')">ntb-column-readonly</xsl:if></x:a-> </col> </xsl:if> </xsl:for-each> </colgroup></x:t-><x:t- match="ntb:e"> <x:va-x:n-rowClass"> <xsl:if test="@xi mod 2 = 0">ntb-row-alternate</xsl:if> <!-- <xsl:if test="<x:v-x:s-@rowselectattr=1"/>">ebarowselected</xsl:if> --> </x:va-> <x:va-x:n-xi"x:s-@xi" /> <x:va-x:n-row"x:s-." /> <tr class="ntb-row {$rowClass} ntb-row{$uniqueId}" xi="{$xi}"> <x:a-x:n-id">row_<x:v-x:s-$xi" /><x:v-x:s-$frozenColumnId"/>_<x:v-x:s-$uniqueId" /></x:a-> <xsl:for-eachx:s-$columns"> <xsl:if test="@Visible = \'1\' and (position() &gt; $firstColumn and position() &lt;= $lastColumn)"> <x:ct-x:n-render-cell"> <x:w-x:n-row"x:s-$row"/> <x:w-x:n-xi"x:s-$xi"/> </x:ct-> </xsl:if> </xsl:for-each> </tr></x:t-> <x:t-x:n-render-cell"> <x:p-x:n-row" /> <x:p-x:n-xi" /> <x:va-x:n-xdatafld"x:s-substring-after(@xdatafld,\'@\')"/> <x:va-x:n-pos"x:s-position()-1"/> <x:va-x:n-value"><x:c-><x:wh- test="not(@xdatafld = \'\')"><x:v-x:s-$row/@*[name()=$xdatafld]" /></x:wh-><!-- @Value will actuall have some escaped XSLT in it like any other bound property --><x:o-><x:v-x:s-@Value" /></x:o-></x:c-></x:va-> <td ebatype="cell" style="vertical-align:middle;" id="cell_{$xi}_{$pos}_{$uniqueId}" xi="{$xi}" col="{$pos}"> <x:a-x:n-style"><x:ct-x:n-CssStyle"><x:w-x:n-row"x:s-$row"/></x:ct-></x:a-> <!-- note the use of the ntb-column<x:v-x:s-$uniqueId"/>_<x:v-x:s-position()" /> class ... that is for a safari bug --> <x:a-x:n-class">ntb-cell-border<xsl:text> </xsl:text>ntb-column-data<x:v-x:s-$uniqueId"/>_<x:v-x:s-position()" /><xsl:text> </xsl:text>ntb-column-<x:c-><x:wh- test="$sortColumn=$pos and $sortDirection=\'Asc\'">ascending</x:wh-><x:wh- test="$sortColumn=$pos and $sortDirection=\'Desc\'">descending</x:wh-><x:o-></x:o-></x:c-><xsl:text> </xsl:text>ntb-column-<x:v-x:s-@DataType"/><xsl:text> </xsl:text><x:ct-x:n-ClassName"><x:w-x:n-row"x:s-$row"/></x:ct-><xsl:text> </xsl:text><xsl:if test="@type = \'NUMBER\' and $value &lt; 0">ntb-cell-negativenumber</xsl:if><xsl:text> </xsl:text>ntb-column<x:v-x:s-$uniqueId"/>_<x:v-x:s-position()" /></x:a-> <div style="white-space:normal"> <x:a-x:n-class"><xsl:text> </xsl:text>ntb-column-data<x:v-x:s-$uniqueId"/>_<x:v-x:s-position()" /><xsl:text> </xsl:text></x:a-> <xsl:if test="$toolTipsEnabled=\'1\'"> <x:a-x:n-title"> <x:v-x:s-$value" /> </x:a-> </xsl:if> <x:at-x:s-."> <x:w-x:n-value"x:s-$value"/> </x:at-> </div> </td> </x:t-> <x:t- match="*[@type=\'TEXT\' or @type=\'\']"> <x:p-x:n-value" /> <x:ct-x:n-replaceblank"> <x:w-x:n-value"x:s-$value" /> </x:ct-> </x:t-> <x:t- match="*[@type=\'NUMBER\']"> <x:p-x:n-value" /> <x:va-x:n-number-mask"> <x:c-> <x:wh- test="@Mask"><x:v-x:s-@Mask" /></x:wh-> <x:o->#,###.00</x:o-> </x:c-> </x:va-> <x:va-x:n-negative-number-mask"> <x:c-> <x:wh- test="@NegativeMask and not(@NegativeMask=\'\')"><x:v-x:s-@NegativeMask" /></x:wh-> <x:o-><x:v-x:s-@NegativeMask" /></x:o-> </x:c-> </x:va-> <x:va-x:n-number"> <x:c-> <x:wh- test="$value &lt; 0"> <x:ct-x:n-n:format"> <x:w-x:n-number"x:s-translate($value,\'-\',\'\')" /> <x:w-x:n-mask"x:s-$negative-number-mask" /> <x:w-x:n-group"x:s-@GroupingSeparator" /> <x:w-x:n-decimal"x:s-@DecimalSeparator" /> </x:ct-> </x:wh-> <x:o-> <x:ct-x:n-n:format"> <x:w-x:n-number"x:s-$value" /> <x:w-x:n-mask"x:s-$number-mask" /> <x:w-x:n-group"x:s-@GroupingSeparator" /> <x:w-x:n-decimal"x:s-@DecimalSeparator" /> </x:ct-> </x:o-> </x:c-> </x:va-> <x:ct-x:n-replaceblank"> <x:w-x:n-value"x:s-$number" /> </x:ct-> </x:t-> <x:t- match="*[@type=\'LOOKUP\']"> <x:p-x:n-value" /> <x:va-x:n-valueField"x:s-@ValueField" /> <x:va-x:n-displayFields"x:s-@DisplayFields" /> <x:c-> <x:wh- test="$valueField = $displayFields"> <x:ct-x:n-replaceblank"> <x:w-x:n-value"x:s-$value" /> </x:ct-> </x:wh-> <x:o-> <x:ct-x:n-replaceblank"> <x:w-x:n-value"> <x:c-> <x:wh- test="@DatasourceId"> <x:va-x:n-preset-value" > <xsl:for-eachx:s-key(\'data-source\',@DatasourceId)//*"> <xsl:if test="@*[name(.)=$valueField and .=$value]"> <x:ct-x:n-print-displayfields"> <x:w-x:n-field"x:s-$displayFields" /> </x:ct-> </xsl:if> </xsl:for-each> </x:va-> <x:c-> <x:wh- test="$preset-value=\'\'"> <x:v-x:s-$value"/> </x:wh-> <x:o-> <x:v-x:s-$preset-value"/> </x:o-> </x:c-> </x:wh-> <x:o-> <x:v-x:s-$value"/> </x:o-> </x:c-> </x:w-> </x:ct-> </x:o-> </x:c-> </x:t-> <x:t- match="*[@type=\'LISTBOX\']"> <x:p-x:n-value" /> <x:va-x:n-valueField"x:s-@ValueField" /> <x:va-x:n-displayFields"x:s-@DisplayFields" /> <x:c-> <x:wh- test="@DatasourceId"> <x:va-x:n-temp-value"> <xsl:for-eachx:s-key(\'data-source\',@DatasourceId)//*"> <xsl:if test="@*[name(.)=$valueField and .=$value]"> <x:ct-x:n-replaceblank"> <x:w-x:n-value"> <x:ct-x:n-print-displayfields"> <x:w-x:n-field"x:s-$displayFields" /> </x:ct-> </x:w-> </x:ct-> </xsl:if> </xsl:for-each> </x:va-> <x:c-> <x:wh- test="not($temp-value = \'\')"> <x:v-x:s-$temp-value"/> </x:wh-> <x:o-> <x:ct-x:n-replaceblank"> <x:w-x:n-value"x:s-$value" /> </x:ct-> </x:o-> </x:c-> </x:wh-> <x:o-> <x:ct-x:n-replaceblank"> <x:w-x:n-value"x:s-$value" /> </x:ct-> </x:o-> </x:c-> </x:t-> <x:t- match="*[@type=\'CHECKBOX\']"> <x:p-x:n-value" /> <x:va-x:n-valueField"x:s-@ValueField" /> <x:va-x:n-displayFields"x:s-@DisplayFields" /> <x:va-x:n-checkedValue"x:s-@CheckedValue" /> <xsl:for-eachx:s-key(\'data-source\',@DatasourceId)//*"> <xsl:if test="@*[name(.)=$valueField and .=$value]"> <x:va-x:n-checkString"> <x:c-> <x:wh- test="$value=$checkedValue">checked</x:wh-> <x:o->unchecked</x:o-> </x:c-> </x:va-> <div style="overflow:hidden;"> <div class="ntb-checkbox ntb-checkbox-{$checkString}" checked="{$value}" width="10" >ATOKENTOREPLACE</div> <div class="ntb-checkbox-text"><x:v-x:s-@*[name(.)=$displayFields]" /></div> </div> </xsl:if> </xsl:for-each> </x:t-> <x:t- match="*[@type=\'IMAGE\']"> <x:p-x:n-value" /> <x:va-x:n-url"> <x:c-> <x:wh- test="@ImageUrl and not(@ImageUrl=\'\')"><x:v-x:s-@ImageUrl" /></x:wh-> <x:o-><x:v-x:s-$value" /></x:o-> </x:c-> </x:va-> <!-- image editor --> <div style="background-image:url(\'{$url}\');background-repeat:no-repeat;" class="ntb-image"> <img border="0" src="{$url}" align="middle" style="visibility:hidden;" /> </div> </x:t-> <x:t- match="*[@type=\'DATE\']"> <x:p-x:n-value" /> <x:va-x:n-date-mask"> <x:c-> <x:wh- test="@Mask"><x:v-x:s-@Mask" /></x:wh-> <x:o->MMM d, yy</x:o-> </x:c-> </x:va-> <x:va-x:n-date"> <x:ct-x:n-d:format-date"> <x:w-x:n-date-time"x:s-$value" /> <x:w-x:n-mask"x:s-$date-mask" /> </x:ct-> </x:va-> <x:ct-x:n-replaceblank"> <x:w-x:n-value"x:s-$date" /> </x:ct-> </x:t-> <x:t- match="*[@type=\'TEXTAREA\']"> <x:p-x:n-value" /> <x:ct-x:n-replace-break"> <x:w-x:n-text"> <x:ct-x:n-replaceblank"> <x:w-x:n-value"x:s-$value" /> </x:ct-> </x:w-> </x:ct-> </x:t-> <x:t- match="*[@type=\'PASSWORD\']">********</x:t-> <x:t- match="*[@type=\'LINK\']"> <x:p-x:n-value" /> <span class="ntb-hyperlink-editor"> <x:ct-x:n-replaceblank"> <x:w-x:n-value"x:s-$value" /> </x:ct-> </span> </x:t-> <x:t-x:n-placeholder"/><x:t-x:n-replaceblank"> <x:p-x:n-value" /> <x:c-> <x:wh- test="not($value) or $value = \'\' or $value = \' \'">ATOKENTOREPLACE</x:wh-> <x:o-><x:v-x:s-$value" /></x:o-> </x:c-></x:t-><x:t-x:n-replace"> <x:p-x:n-text"/> <x:p-x:n-search"/> <x:p-x:n-replacement"/> <x:c-> <x:wh- test="contains($text, $search)"> <x:v-x:s-substring-before($text, $search)"/> <x:v-x:s-$replacement"/> <x:ct-x:n-replace"> <x:w-x:n-text"x:s-substring-after($text,$search)"/> <x:w-x:n-search"x:s-$search"/> <x:w-x:n-replacement"x:s-$replacement"/> </x:ct-> </x:wh-> <x:o-> <x:v-x:s-$text"/> </x:o-> </x:c-></x:t-><x:t-x:n-print-displayfields"> <x:p-x:n-field" /> <x:c-> <x:wh- test="contains($field,\'|\')" > <!-- Here we hardcode a spacer \', \' - this should probably be moved elsewhere. --> <x:v-x:s-concat(@*[name(.)=substring-before($field,\'|\')],\', \')" /> <x:ct-x:n-print-displayfields"> <x:w-x:n-field"x:s-substring-after($field,\'|\')" /> </x:ct-> </x:wh-> <x:o-> <x:v-x:s-@*[name(.)=$field]" /> </x:o-> </x:c-></x:t-><x:t-x:n-replace-break"> <x:p-x:n-text"/> <x:ct-x:n-replace"> <x:w-x:n-text"x:s-$text"/> <x:w-x:n-search"x:s-\'&amp;amp;#xa;\'"/> <x:w-x:n-replacement"x:s-\'&amp;lt;br/&amp;gt;\'"/> </x:ct-></x:t-><x:t-x:n-ClassName"> <x:p-x:n-row"/> <x:va-x:n-class"x:s-@ClassName"/> <x:va-x:n-value"x:s-$row/@*[name()=$class]"/> <x:c-> <x:wh- test="$value"><x:v-x:s-$value"/></x:wh-> <x:o-><x:v-x:s-$class"/></x:o-> </x:c-></x:t-><x:t-x:n-CssStyle"> <x:p-x:n-row"/> <x:va-x:n-style"x:s-@CssStyle"/> <x:va-x:n-value"x:s-$row/@*[name()=$style]"/> <x:c-> <x:wh- test="$value"><x:v-x:s-$value"/></x:wh-> <x:o-><x:v-x:s-$style"/></x:o-> </x:c-></x:t-><!--This can be used as an insertion point for column templates--> <!--COLUMN-TYPE-TEMPLATES--></xsl:stylesheet>';

var temp_ntb_frameCssXslProc='<?xml version="1.0" encoding="utf-8"?><xsl:stylesheet version="1.0" xmlns:user="http://mycompany.com/mynamespace" xmlns:msxsl="urn:schemas-microsoft-com:xslt" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"><xsl:output method="text" omit-xml-declaration="yes"/><x:p-x:n-IE"x:s-\'false\'"/><x:va-x:n-g"x:s-//state/nitobi.grid.Grid"></x:va-><x:va-x:n-u"x:s-//state/@uniqueID"></x:va-><xsl:keyx:n-style" match="//s" use="@k" /><x:t- match = "/"> <x:va-x:n-t"x:s-$g/@Theme"></x:va-> <x:va-x:n-showvscroll"><x:c-><x:wh- test="($g/@VScrollbarEnabled=\'true\' or $g/@VScrollbarEnabled=1)">1</x:wh-><x:o->0</x:o-></x:c-></x:va-> <x:va-x:n-showhscroll"><x:c-><x:wh- test="($g/@HScrollbarEnabled=\'true\' or $g/@HScrollbarEnabled=1)">1</x:wh-><x:o->0</x:o-></x:c-></x:va-> <x:va-x:n-showtoolbar"><x:c-><x:wh- test="($g/@ToolbarEnabled=\'true\' or $g/@ToolbarEnabled=1)">1</x:wh-><x:o->0</x:o-></x:c-></x:va-> <x:va-x:n-frozen-columns-width"> <x:ct-x:n-get-pane-width"> <x:w-x:n-start-column"x:s-number(1)"/> <x:w-x:n-end-column"x:s-number($g/@FrozenLeftColumnCount)"/> <x:w-x:n-current-width"x:s-number(0)"/> </x:ct-> </x:va-> <x:va-x:n-unfrozen-columns-width"> <x:ct-x:n-get-pane-width"> <x:w-x:n-start-column"x:s-number($g/@FrozenLeftColumnCount)+1"/> <x:w-x:n-end-column"x:s-number($g/@ColumnCount)"/> <x:w-x:n-current-width"x:s-number(0)"/> </x:ct-> </x:va-> <x:va-x:n-total-columns-width"> <x:v-x:s-number($frozen-columns-width) + number($unfrozen-columns-width)"/> </x:va-> <x:va-x:n-scrollerHeight"x:s-number($g/@Height)-(number($g/@scrollbarHeight)*$showhscroll)-(number($g/@ToolbarHeight)*$showtoolbar)" /> <x:va-x:n-scrollerWidth"x:s-number($g/@Width)-(number($g/@scrollbarWidth)*number($g/@VScrollbarEnabled))" /> <x:va-x:n-midHeight"x:s-number($g/@Height)-(number($g/@scrollbarHeight)*$showhscroll)-(number($g/@ToolbarHeight)*$showtoolbar)-number($g/@top)"/> #grid<x:v-x:s-$u" /> { height:<x:v-x:s-$g/@Height" />px; width:<x:v-x:s-$g/@Width" />px; overflow:hidden;text-align:left; <xsl:if test="$IE=\'true\'"> position:relative; </xsl:if> } .hScrollbarRange<x:v-x:s-$u" /> { width:<x:v-x:s-$total-columns-width"/>px; } .vScrollbarRange<x:v-x:s-$u" /> {} .ntb-grid-datablock, .ntb-grid-headerblock { table-layout:fixed; <xsl:if test="$IE=\'true\'"> width:0px; </xsl:if> } .<x:v-x:s-$t"/> .ntb-cell {overflow:hidden;white-space:nowrap;} .<x:v-x:s-$t"/> .ntb-cell, x:-moz-any-link, x:default {display: -moz-box;} .<x:v-x:s-$t"/> .ntb-cell-border {overflow:hidden;white-space:nowrap;<xsl:if test="$IE=\'true\'">height:auto;</xsl:if>} .ntb-grid-headershow<x:v-x:s-$u" /> {padding:0px;<xsl:if test="not($g/@ColumnIndicatorsEnabled=1)">display:none;</xsl:if>} .ntb-grid-vscrollshow<x:v-x:s-$u" /> {padding:0px;<xsl:if test="not($g/@VScrollbarEnabled=1)">display:none;</xsl:if>} #ntb-grid-hscrollshow<x:v-x:s-$u" /> {padding:0px;<xsl:if test="not($g/@HScrollbarEnabled=1)">display:none;</xsl:if>} .ntb-grid-toolbarshow<x:v-x:s-$u" /> {<xsl:if test="not($g/@ToolbarEnabled=1) and not($g/@ToolbarEnabled=\'true\')">display:none;</xsl:if>} .ntb-grid-height<x:v-x:s-$u" /> {height:<x:v-x:s-$g/@Height" />px;overflow:hidden;} .ntb-grid-width<x:v-x:s-$u" /> {width:<x:v-x:s-$g/@Width" />px;overflow:hidden;} .ntb-grid-overlay<x:v-x:s-$u" /> {position:relative;z-index:1000;top:0px;left:0px;} .ntb-grid-scroller<x:v-x:s-$u" /> { overflow:hidden; text-align:left; -moz-user-select: none; -webkit-user-select: none; -khtml-user-select: none; user-select: none; } .ntb-grid-scrollerheight<x:v-x:s-$u" /> {height: <x:c-><x:wh- test="($total-columns-width &gt; $g/@Width)"><x:v-x:s-$scrollerHeight"/></x:wh-><x:o-><x:v-x:s-number($scrollerHeight) + number($g/@scrollbarHeight)"/></x:o-></x:c->px;} .ntb-grid-scrollerwidth<x:v-x:s-$u" /> {width:<x:v-x:s-$scrollerWidth"/>px;} .ntb-grid-topheight<x:v-x:s-$u" /> {height:<x:v-x:s-$g/@top" />px;overflow:hidden;<xsl:if test="$g/@top=0">display:none;</xsl:if>} .ntb-grid-midheight<x:v-x:s-$u" /> {overflow:hidden;height:<x:c-><x:wh- test="($total-columns-width &gt; $g/@Width)"><x:v-x:s-$midHeight"/></x:wh-><x:o-><x:v-x:s-number($midHeight) + number($g/@scrollbarHeight)"/></x:o-></x:c->px;} .ntb-grid-leftwidth<x:v-x:s-$u" /> {width:<x:v-x:s-$g/@left" />px;overflow:hidden;text-align:left;} .ntb-grid-centerwidth<x:v-x:s-$u" /> {width:<x:v-x:s-number($g/@Width)-number($g/@left)-(number($g/@scrollbarWidth)*$showvscroll)" />px;} .ntb-grid-scrollbarheight<x:v-x:s-$u" /> {height:<x:v-x:s-$g/@scrollbarHeight" />px;} .ntb-grid-scrollbarwidth<x:v-x:s-$u" /> {width:<x:v-x:s-$g/@scrollbarWidth" />px;} .ntb-grid-toolbarheight<x:v-x:s-$u" /> {height:<x:v-x:s-$g/@ToolbarHeight" />px;} .ntb-grid-surfacewidth<x:v-x:s-$u" /> {width:<x:v-x:s-number($unfrozen-columns-width)"/>px;} .ntb-grid-surfaceheight<x:v-x:s-$u" /> {height:100px;} .ntb-grid {padding:0px;margin:0px;border:1px solid #cccccc} .ntb-scroller {padding:0px;} .ntb-scrollcorner {padding:0px;} .ntb-hscrollbar<x:v-x:s-$u" /> {<x:c-><x:wh- test="($total-columns-width &gt; $scrollerWidth)">display:block;</x:wh-><x:o->display:none;</x:o-></x:c->} .ntb-input-border { table-layout:fixed; overflow:hidden; position:absolute; z-index:2000; top:-2000px; left:-2000px; } .ntb-column-resize-surface { filter:alpha(opacity=1); background-color:white; position:absolute; display:none; top:-1000px; left:-5000px; width:100px; height:100px; z-index:800; } .ntb-row<x:v-x:s-$u" /> {line-height:<x:v-x:s-number($g/@RowHeight)-number($g/@InnerCellBorder)" />px;margin:0px;} .ntb-header-row<x:v-x:s-$u" /> {height:<x:v-x:s-$g/@HeaderHeight" />px;} .ntb-column-indicator<x:v-x:s-$u" /> {height:<x:v-x:s-number($g/@HeaderHeight)-2" />px;} <x:at-x:s-state/nitobi.grid.Columns" /></x:t-><x:t-x:n-get-pane-width"> <x:p-x:n-start-column"/> <x:p-x:n-end-column"/> <x:p-x:n-current-width"/> <x:c-> <x:wh- test="$start-column &lt;= $end-column"> <x:ct-x:n-get-pane-width"> <x:w-x:n-start-column"x:s-$start-column+1"/> <x:w-x:n-end-column"x:s-$end-column"/> <x:w-x:n-current-width"x:s-number($current-width) + number(//state/nitobi.grid.Columns/nitobi.grid.Column[$start-column]/@Width)"/> </x:ct-> </x:wh-> <x:o-> <x:v-x:s-$current-width"/> </x:o-> </x:c-> </x:t-><x:t- match="nitobi.grid.Columns"> <xsl:for-eachx:s-*"> <x:va-x:n-p"><x:v-x:s-position()"/></x:va-> <x:va-x:n-w"><x:v-x:s-@Width"/></x:va-> <x:va-x:n-colw"><x:v-x:s-number($w)-number($g/@CellBorder)"/></x:va-> <x:va-x:n-coldataw"><x:v-x:s-number($w)-number($g/@InnerCellBorder)"/></x:va-> #grid<x:v-x:s-$u" /> .ntb-column<x:v-x:s-$u" />_<xsl:number value="$p" /> {width:<x:v-x:s-$colw" />px;} #grid<x:v-x:s-$u" /> .ntb-column-data<x:v-x:s-$u" />_<xsl:number value="$p" /> {width:<x:v-x:s-$coldataw" />px;text-align:<x:v-x:s-@Align"/>;} </xsl:for-each></x:t-></xsl:stylesheet>';

nitobi.grid.loadRowWrap = function()
{
  nitobi.grid.rowXslProc = nitobi.xml.createXslProcessor(nitobiXmlDecodeXslt(temp_ntb_rowXslProc));
  // This is for IE
  nitobi.grid.frameCssXslProc = nitobi.xml.createXslProcessor(nitobiXmlDecodeXslt(temp_ntb_frameCssXslProc));
}

/**
 * Load the next page of data.
 */
nitobi.grid.GridStandard.prototype.pageNext=function() {
	this.fire("BeforeLoadNextPage");
  	this.fitted = false;
  	this.loadingScreen.show();
	this.loadDataPage(this.getCurrentPageIndex()+1);
  this.fire("AfterLoadNextPage");
}



/**
 * Load a specific page of data.
 * @param {Number} newPageNumber The page to load.
 */
nitobi.grid.GridStandard.prototype.loadDataPage = function(pageIndex) 
{
	// Clear the selection if there is one.
	this.fire('BeforeLoadDataPage');

  if (pageIndex > -1) 
	{
		if (this.sortColumn)
		{
			if (this.datatable.sortColumn)
			{
				for (var i = 0; i < this.getColumnCount(); i++)
				{
					var colObj = this.getColumnObject(i);
					if (colObj.getColumnName() == this.datatable.sortColumn)
					{
						this.setSortStyle(i,this.datatable.sortDir);
						break;
					}
				}
			}
			else
			{
				this.setSortStyle(this.sortColumn.column, "", true);
			}
		}
    // Note: How does this work in this weird mode
    this.setCurrentPageIndex(pageIndex);
    // Our start row is equal to the record start
    var entry = this.pageStates[pageIndex] || {};
    var rows = entry.numRows;
    if (this.pageStates[pageIndex] == null)
    {
        entry.startRow = this.pageStates[pageIndex-1].startRow + this.pageStates[pageIndex-1].numRows;
        this.pageStates.push(entry);
        entry.numRows = this.maxRowsPerPage;
        rows = this.maxRowsPerPage;
    } 
		this.datatable.flush();
		this.datatable.get(entry.startRow, rows, this, this.afterLoadDataPage);

	}
	
  // Resize the grid if necessary, show/hide scrollbars
	// Set focus to topleft cell
	this.fire('AfterLoadDataPage');
}

var calcVisibleRows = function(evt)
{
  var grid = evt.source;
  if (grid.pageStates == null)
  {
    grid.pageStates = [];
  }
  if (grid.maxRowsPerPage == null || grid.maxRowsPerPage < grid.getRowsPerPage())
  {
    grid.maxRowsPerPage = grid.getRowsPerPage();
  }
  var index = grid.getCurrentPageIndex();
  var entry = grid.pageStates[index]; 
  if(entry == null)
  {
    entry = {};
    entry.startRow = 0;
    entry.numRows = grid.getRowsPerPage();
    grid.pageStates.push(entry);
  }
  var viewport = grid.scroller.view.midcenter;
  if (viewport.element.clientHeight < viewport.surface.clientHeight && entry.numRows > 1)
  {
    grid.datatable.flush();
    entry.numRows--;
    grid.setRowsPerPage(entry.numRows);
	grid.datatable.get(entry.startRow, entry.numRows, grid, grid.afterLoadDataPage);
  }
  else
  {
      grid.pageStates[index].numRows = grid.getRowsPerPage();
      equalHeight(grid);
      grid.fitted = true;
      grid.loadingScreen.hide();
      grid.toolbars.setStartRow(entry.startRow + 1);
      grid.toolbars.setNumRows(entry.startRow + entry.numRows);
  }
}

var equalHeight = function(grid)
{
  var left_viewport = grid.scroller.view.midleft;
  var right_viewport = grid.scroller.view.midcenter;
  var rowCount = grid.getRowsPerPage();
  for(var i = 0; i < rowCount; ++i)
  {
    left_row = $ntb('row_'+ i + 'left_EditorsGrid');
    right_row = $ntb('row_'+ i+ '_EditorsGrid');
    if (left_row.clientHeight > right_row.clientHeight)
    {
      right_row.style.height = left_row.clientHeight + "px";
    }
    else
    {
      left_row.style.height = right_row.clientHeight + "px";
    }
  }
}

nitobi.grid.LoadingScreen.prototype.hide = function()
{
  if (this.grid.fitted != null && this.grid.fitted)
  {
	  this.loadingScreen.style.display="none";
  }
}

nitobi.ui.Toolbars.prototype.setStartRow = function(value)
{
	var start_page = $ntb('startRow' + this.uid);
	if (start_page)
	{		
		start_page.innerHTML = "&nbsp;" + value;	
	}	
}

nitobi.ui.Toolbars.prototype.setNumRows = function(value)
{
	var start_page = $ntb('numRows' + this.uid);
	
	if (start_page)
	{		
		start_page.innerHTML  = "&nbsp;" + value; 	
	}	
}

nitobi.ui.Toolbars.prototype.calculateRange = function()
{
	var last_row = $ntb('endRow' + this.uid)
	if(last_row)
	{
		last_row.innerHTML = "&nbsp;" + this.grid.datatable.getTotalRowCount();
	}
}

// Custom column resize to deal with the column width issues, and allignment in FF3 and Safari

/**
 * Resizes the grid column to the specified width. 
 * @param {Number} width The width (in pixels) of the column.
 * @param {Number|nitobi.grid.Column} column The index of the column to resize or the Column object.
 */
nitobi.grid.Grid.prototype.columnResize= function(column, width) 
{
	if (isNaN(width)) return;

	// Yank this out to avoid recursion
	this.colResize(column, width);
	
	resizeCellsToFit(column, width);

	var afterColumnResizeEventArgs = new nitobi.grid.OnAfterColumnResizeEventArgs(this, column);
	nitobi.event.evaluate(column.getOnAfterResizeEvent(), afterColumnResizeEventArgs);
}

nitobi.grid.Grid.prototype.colResize = function(column, width)
{
	column = (typeof column == "object"?column:this.getColumnObject(column));
	var prevWidth = column.getWidth();
	column.setWidth(width);

	//	TODO: this is a hack to fix a problem with the fixed column header not resizing.
	// This was causing some hacky code to be added in EBASelection.collapse 
	// see the following - tix for details.
	// http://portal:8090/cgi-bin/trac.cgi/ticket/522
	this.updateCellRanges();

	/*
	 * Found the stupidity in the CSS class that should fix this.  This code
   * depends on nitobi.html.Css.getRule.
   */
	if (nitobi.browser.IE7)
	{
      		this.generateCss();
	}
	else
	{
		var columnIndex = column.column;
		var dx = width - prevWidth;
		var C = nitobi.html.Css;
		// Things are different if we are resizing a frozen or unfrozen column
		if (columnIndex < this.getFrozenLeftColumnCount())
		{
			var leftStyle = C.getClass(".ntb-grid-leftwidth"+this.uid);
			leftStyle.width = (parseInt(leftStyle.width) + dx) + "px";
			var centerStyle = C.getClass(".ntb-grid-centerwidth"+this.uid);
			centerStyle.width = (parseInt(centerStyle.width) - dx) + "px";
		}
		else
		{
			var surfaceStyle = C.getClass(".ntb-grid-surfacewidth"+this.uid);
			surfaceStyle.width = (parseInt(surfaceStyle.width) + dx) + "px";
		}
	
		// No matter what do the column class itself
		var columnStyle = C.getClass(".ntb-column"+this.uid+"_"+(columnIndex+1));
		columnStyle.width = (parseInt(columnStyle.width) + dx) + "px";
	
		this.adjustHorizontalScrollBars();
	}

	this.Selection.collapse(this.activeCell);

}

/* This little hack makes it so you can't resize smaller than the largest word. */
var resizeCellsToFit = function(column, width)
{
	var grid = column.grid;
	var col = column.column;
	var hdr = column.getHeaderElement();
	var rowCount = grid.getRowCount();
	var viewport = grid.scroller.view.midcenter;

	if(nitobi.browser.IE)
	{
		for (var i = 0; i < rowCount; ++i)
		{
			var cell = $ntb('cell_' + i + '_' + col + "_" + grid.uid);
			if (cell.firstChild.offsetHeight > cell.offsetHeight)
			{	
				cell.parentNode.style.height = cell.firstChild.offsetHeight + "px";
			}	
		}
	}

	// Do the snap back
	var cell = $ntb('cell_0_' + col + "_" + grid.uid);
	if(cell.offsetWidth > hdr.offsetWidth)  
	{

		grid.colResize(column, cell.offsetWidth);
	}
	else if(cell.offsetWidth < cell.firstChild.offsetWidth)
	{
		grid.colResize(column, cell.firstChild.offsetWidth);
	}

	equalHeight(grid);
 	if (viewport.element.clientHeight < viewport.surface.clientHeight)
  	{
		var pct = viewport.element.clientHeight / viewport.surface.clientHeight;
		grid.vScrollbar.setRange(pct);	
  	}

}

